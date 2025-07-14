import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { ServersDataInterface } from '~/interfaces/servers-data-interface';
import { serversData } from '~/data/servers-data';

// Хранилище данных серверов
export const useServersDataStore = defineStore('servers-data-store', () => {
  const data = ref<ServersDataInterface[]>(serversData);

  const celediaData = ref<ServersDataInterface | undefined>(serversData.find(item => item.id === 'celedia'));
  const pawheraData = ref<ServersDataInterface | undefined>(serversData.find(item => item.id === 'pawhera'));
  const wensarData = ref<ServersDataInterface | undefined>(serversData.find(item => item.id === 'wensar'));

  return {
    data,
    celediaData,
    pawheraData,
    wensarData
  }
})