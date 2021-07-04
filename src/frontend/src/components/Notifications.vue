<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <h3>Notifications</h3>
            </div>
            <div class="card-body">

                <table class="table table-hover">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Sender</th>
                        <th>Type</th>
                        <th>Description</th>
                        <th>Time</th>
                        <th>Status</th>
                    </tr>
                    </thead>

                    <tbody>
                        <tr v-for="notification in notifications" :key="notification.invite_id" :class=getRawClass(notification)>
                            <td>{{ notification.invite_id }}</td>
                            <td>{{ notification.sender_id }}</td>
                            <td>{{ notification.vector }}</td>
                            <td>{{ notification.invite }}</td>
                            <td>{{ notification.invite_time | formatDateFromUnixTimestamp}}</td>
                            <td>{{ notification.status }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: "Notifications",
    data() {  
        return {  
            notifications: [],  
            timer: "",
            auth_user_id: 1, // Fetch auth user from localStorage or Vuex when integrate with login system
        };  
    },
    created() {  
        this.fetchData();  
        this.timer = setInterval(this.fetchUpdatedData, 5000);  
    },
    methods: {  
        fetchData() {
            let uri = `notifications/${this.auth_user_id}`;
            axios.get(uri).then((response) => {
                this.notifications = response.data.invites;
            });
        },
        fetchUpdatedData() {  
            let uri = `notifications/${this.auth_user_id}/updated`;
            axios.get(uri).then((response) => {
                this.notifications = response.data.invites;
            });
        },  
        stopAutoRefresh() {  
            clearInterval(this.timer);  
        },
        getRawClass(notification) {
            if (notification.status == 'read') {
                return 'read-class'
            }
        }  
    },  
    beforeDestroy() {  
        this.stopAutoRefresh();  
    },  
}
</script>

<style scoped>
    .read-class {
        background-color: #DEDEDE;
    }
</style>