<template>
  <component :is="layout">
    <router-view :layout.sync="layout"/>
  </component>
</template>

<script>
import {ScrollReveal} from '@/utils/ScrollReveal.js'

export default {
  name: 'App',
  mixins: [ScrollReveal],
  data() {
    return {
      layout: 'div'
    }
  },
  methods: {},

  mounted() {
    document.body.classList.add('is-loaded');

    this.$root.$once('updateWalletClient', async (callbackHandler) => {
      await callbackHandler();
    })




      // Some random colors
  const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];

  const numBalls = 25;
  const balls = [];

  for (let i = 0; i < numBalls; i++) {
    let ball = document.createElement("div");
    ball.classList.add("ball");
    ball.style.background = colors[Math.floor(Math.random() * colors.length)];
    ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
    ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
    ball.style.transform = `scale(${Math.random()})`;
    ball.style.width = `${Math.random()}em`;
    ball.style.height = ball.style.width;
    
    balls.push(ball);
    document.body.append(ball);
  }

  // Keyframes
  balls.forEach((el, i) => {
    let to = {
      x: Math.random() * (i % 2 === 0 ? -27 : 27),
      y: Math.random() * 35
    };

    el.animate(
      [
        { transform: "translate(0, 0)" },
        { transform: `translate(${to.x}rem, ${to.y}rem)` }
      ],
      {
        duration: (Math.random() + 1) * 8000, // random duration
        direction: "alternate",
        fill: "both",
        iterations: Infinity,
        easing: "ease-in-out"
      }
    );
  });
  },
}
</script>
