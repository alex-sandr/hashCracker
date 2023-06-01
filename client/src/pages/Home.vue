<template>
  <div>
    <v-sheet rounded class="pa-4">
      <v-table>
        <thead>
          <tr>
            <th class="text-left">id</th>
            <th class="text-left">username</th>
            <th class="text-left">hashtype</th>
            <th class="text-left">hash</th>
            <th class="text-left">cracked</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in hashes" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.username }}</td>
            <td>{{ item.hashType }}</td>
            <td>{{ item.hash }}</td>

            <td>
              <v-chip
                class="ma-2"
                :color="item.cracked !== 'false' ? 'green' : 'red'"
              >
                {{ item.cracked !== "false" ? item.cracked : "not hacked yet" }}
              </v-chip>
            </td>
            <td>
              <v-dialog transition="dialog-bottom-transition" width="auto">
                <template v-slot:activator="{ props }">
                  <v-btn color="deep-purple" v-bind="props">more</v-btn>
                </template>
                <template v-slot:default="{ isActive }">
                  <v-card>
                    <v-toolbar
                      color="deep-purple"
                      title="Opening from the bottom"
                    ></v-toolbar>
                    <v-card-text>
                      <div class="pa-12">
                        <pre>
                        {{ item.data }}
                       </pre
                        >
                      </div>
                    </v-card-text>
                    <v-card-actions class="justify-end">
                      <v-btn variant="text" @click="isActive.value = false"
                        >Close</v-btn
                      >
                    </v-card-actions>
                  </v-card>
                </template>
              </v-dialog>
            </td>
          </tr>
        </tbody>
      </v-table>
    </v-sheet>
  </div>
</template>

<script>
import { getAllHashes } from "../api/http";

export default {
  async mounted() {
    const hashes = await getAllHashes();
    hashes.forEach((hash, idx) => {
      this.hashes.push({
        id: idx + 1,
        username: hash.user.username,
        hashType: hash.hashType,
        hash: hash.hash,
        cracked: hash.cracked,
        data: hash,
      });
    });
  },
  data: () => ({
    drawer: null,
    selectedItem: 0,
    hashes: [],
  }),
};
</script>
