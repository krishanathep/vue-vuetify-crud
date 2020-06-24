<template>
  <v-row>
    <v-col cols="" md="12">
      <v-card class="mt-5">
        <v-card-title>
          REPAIR SYSTEM ONLINE
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="600">
            <template v-slot:activator="{ on }">
              <v-btn color="primary" v-on="on">
                <v-icon small>mdi-plus </v-icon> New Job
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                New Job
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="" md="6">
                      <v-text-field
                        label="วันที่แจ้งซ่อม"
                        :value="date"
                        v-model="date"
                        v-on:change="date = $event.target.value"
                      >
                      </v-text-field>
                    </v-col>
                    <v-col cols="" md="6">
                      <v-text-field
                        label="เลขที่แจ้งซ่อม"
                        :value="id"
                        v-model="id"
                        v-on:change="id = $event.target.value"
                      >
                      </v-text-field>
                    </v-col>
                    <v-col cols="" md="6">
                      <v-text-field
                        label="ผู้แจ้งซ่อม"
                        :value="name"
                        v-model="name"
                        v-on:change="name = $event.target.value"
                      >
                      </v-text-field>
                    </v-col>
                    <v-col cols="" md="6">
                      <v-text-field
                        label="รายการซ่อม"
                        :value="repair"
                        v-model="repair"
                        v-on:change="repair = $event.target.value"
                      >
                      </v-text-field>
                    </v-col>
                    <v-col cols="" md="6">
                      <v-text-field
                        label="ผู้รับแจ้งซ่อม"
                        :value="staff"
                        v-model="staff"
                        v-on:change="staff = $event.target.value"
                      >
                      </v-text-field>
                    </v-col>
                    <v-col cols="" md="6">
                      <v-text-field
                        label="สถานะ"
                        :value="status"
                        v-model="status"
                        v-on:change="status = $event.target.value"
                      >
                      </v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="close()"
                  >Cancel</v-btn
                >
                <v-btn color="blue darken-1" text @click="addRepair()"
                  >Save</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-card-title>
        <v-card-text>
          <v-data-table
            :headers="headers"
            :items="$store.getters.repairs"
            :items-per-page="10"
          >
            <template v-slot:item.actions="{ index }">
              <v-icon @click="openView()">
                mdi-eye
              </v-icon>
              <v-icon class="mr-2 ml-2" @click="openEdit(index)">
                mdi-pencil
              </v-icon>
              <v-icon @click="deleteRepair(index)">
                mdi-delete
              </v-icon>
            </template>
          </v-data-table>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "RepairList",
  data() {
    return {
      no: 7,
      dialog: false,
      headers: [
        { text: "คิวที่", value: "no" },
        { text: "วันที่แจ้งซ่อม", value: "date" },
        { text: "ใบแจ้งซ่อม", value: "id" },
        { text: "ผู้แจ้งซ่อม", value: "name" },
        { text: "รายการที่ซ่อม", value: "repair" },
        { text: "ผู้รับแจ้ง", value: "staff" },
        { text: "สถานะ", value: "status" },
        { text: "ลายละเอียด", value: "actions" },
      ],
    };
  },
  created() {
    this.fetchRepair();
  },
  methods: {
    fetchRepair() {
      this.$store.dispatch("fetchRepair");
    },
    addRepair() {
      if (this.id) {
        let payload = {
          no: this.no++,
          date: this.date,
          id: this.id,
          name: this.name,
          repair: this.repair,
          staff: this.staff,
          status: this.status,
        };
        this.$store.dispatch("addRepair", payload);

        this.date = '';
        this.id ='';
        this.name ='';
        this.repair='';
        this.staff='';
        this.status='';

        this.dialog = false;
      }
    },
    deleteRepair(index) {
        this.$store.dispatch('deleteRepair', index)
    },
    close() {
      this.dialog = false;
    },
  },
};
</script>
