<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const chatUsers = [
  {
    "username": "Yusheero"
  },
]

// Реактивные переменные для сообщений и ввода
const messages = ref<{user: string, text: string}[]>([])
const input = ref('')
const username = ref(chatUsers[0].username) // Для простоты, первый пользователь
let ws: WebSocket | null = null

// Функция отправки сообщения
function sendMessage() {
  if (ws && ws.readyState === WebSocket.OPEN && input.value.trim()) {
    const msg = JSON.stringify({ user: username.value, text: input.value })
    ws.send(msg)
    input.value = ''
  }
}

// Обработка отправки формы
function onSubmit(e: Event) {
  e.preventDefault()
  sendMessage()
}

onMounted(() => {
  // Подключение к WebSocket (используем публичный эхо-сервер)
  ws = new WebSocket('wss://ws.ifelse.io')
  ws.onmessage = (event) => {
    try {
      // Пробуем распарсить как JSON, иначе просто текст
      const data = JSON.parse(event.data)
      if (data.user && data.text) {
        messages.value.push({ user: data.user, text: data.text })
      } else {
        messages.value.push({ user: 'server', text: event.data })
      }
    } catch {
      messages.value.push({ user: 'server', text: event.data })
    }
  }
  ws.onopen = () => {
    messages.value.push({ user: 'system', text: 'WebSocket соединение установлено.' })
  }
  ws.onclose = () => {
    messages.value.push({ user: 'system', text: 'WebSocket соединение закрыто.' })
  }
  ws.onerror = () => {
    messages.value.push({ user: 'system', text: 'Ошибка WebSocket.' })
  }
})

onBeforeUnmount(() => {
  if (ws) ws.close()
})
</script>

<template>
  <div class="chat">
    <div class="chat__sidebar">
      <ul class="chat__user-list">
        <li class="chat__user" v-for="n in chatUsers" :key="n.username">{{ n.username }}</li>
      </ul>
    </div>
    <div class="chat__main">
      <div class="chat__messages">
        <div v-for="(msg, i) in messages" :key="i" class="chat__message">
          <span class="chat__message-user">{{ msg.user }}:</span> {{ msg.text }}
        </div>
      </div>
      <form class="chat__input-form" @submit="onSubmit">
        <input class="chat__input" type="text" v-model="input" placeholder="Введите сообщение..." />
        <button class="chat__send-btn" type="submit">Отправить</button>
      </form>
    </div>
  </div>
</template>

<style scoped lang="scss">
.chat {
  width: 100%;
  height: 100%;
  display: flex;
  border: 2px solid var(--color-grey);
  border-radius: 1rem;
  overflow: hidden;

  &__sidebar {
    width: 180px;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border-right: 2px solid #23272f;
  }

  &__sidebar-title {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  &__user-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  &__user {
    padding: 0.5rem 1rem;
    background: var(--color-black-light);
    border-radius: 0.5rem;
    cursor: pointer;
    transition: background 0.2s;
    &:hover {
      background: #181a20;
    }
  }

  &__main {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
    gap: 0.5rem;
  }

  &__messages {
    flex: 1;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    background: #181a20;
    border-radius: 0.5rem;
    padding: 0.8rem;
  }

  &__message {
    font-size: 1rem;
    color: #fff;
  }

  &__message-user {
    font-weight: 700;
    color: #4f8cff;
  }

  &__input-form {
    display: flex;
    gap: 0.5rem;
  }

  &__input {
    flex: 1;
    padding: 0.8rem 1rem;
    border-radius: 0.5rem;
    border: 1px solid #444851;
    font-size: 1rem;
    outline: none;
  }
  
  &__send-btn {
    padding: 0.5rem 1.5rem;
    border-radius: 0.5rem;
    border: none;
    background: #343434;
    color: #fff;
    font-weight: 700;
    cursor: pointer;
    transition: background 0.2s;
    &:hover {
      background: #8c1010;
    }
  }
}
</style>
