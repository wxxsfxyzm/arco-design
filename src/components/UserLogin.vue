<template>
  <div>
    <h2>登录</h2>
    <form @submit.prevent="login"> 
      <label>
        用户名:
        <input v-model="username" type="text" required>
      </label>
      <label>
        密码:
        <input v-model="password" type="password" required>
      </label>
      <button type="submit">登录</button>
    </form>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script>

import { login } from '@/api/auth';

export default {
  data() {
    return {
      username: '',
      password: '',
      error: null,
    };
  },
  methods: {
    async login() {
      try {
        const response = await login({
          username: this.username,
          password: this.password,
        });
        this.$store.dispatch('setJwt', response.data.jwt);
      } catch (error) {
        this.error = '登录失败';
      }
    },
  },
};
</script>

<!-- 
//使用以下代码取回JWT令牌：
  <script>
export default {
  created() {
    console.log(this.$store.state.jwt);
  },
};
</script><script>
export default {
  created() {
    console.log(this.$store.state.jwt);
  },
};
</script> -->