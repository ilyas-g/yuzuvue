<template>
    <main>
      <!-- <h1>Team</h1> -->
      <div v-if="error">
        {{ error }}
      </div>

      <div class="teamContainer" v-else>
        <!-- <div v-for="player in players" :key="player.id">
          <figure>
              <img :src="getImage(player.attributes.photo.data.attributes.formats.small.url)" alt="Mountains">
              <router-link :to="{ name: 'player', params: { name: player.attributes.name }}" class="title">{{ player.attributes.name }}</router-link>
              <figcaption>
                <router-link :to="{ name: 'player', params: { name: player.attributes.name }}" class="title">{{ player.attributes.name }}</router-link>
                <img src="https://picsum.photos/id/287/250/300" alt="Mountains" />
              </figcaption>
          </figure>
        </div> -->


        <div v-for="player in players" :key="player.id" class="article-card">
          <router-link :to="{ name: 'player', params: { name: player.attributes.name }}">
          <div class="content">
            <figure>
              <img :src="getImage(player.attributes.photo.data.attributes.formats.small.url)" alt="Mountains">

              <span class="title">{{ player.attributes.name }}</span>
              <figcaption>

                <img class="img-full" :src="image" />

              </figcaption>
            </figure>
          </div>
        </router-link>
        </div>

        <!-- <div v-for="player in players" :key="player.id" class="article-card">
          <div class="content">
              <router-link :to="{ name: 'player', params: { name: player.attributes.name }}" class="title">{{ player.attributes.name }}</router-link>
          </div>
          <img :src="getImage(player.attributes.photo.data.attributes.formats.small.url)" />
        </div> -->
      </div>
    </main>

    <router-view v-slot="{ Component }">
      <!-- *** A REGARDER POUR LES TRANSITIONS ! https://www.youtube.com/watch?v=pG5pwDGc3D4 *** -->
      <transition name="fade" mode="out-in">
        <Component :is="Component" />
      </transition>
  </router-view>
</template>

<script>
import axios from 'axios'
import image from "@/assets/sf6-logo.png"

export default {
    name: 'TeamView',
    data () {
        return {
        players: [],
        }
    },
    setup() {
      function getImage(imagePath) {
        const baseURL = process.env.VUE_APP_DOMAIN_NAME;
        return baseURL + imagePath;
      }

      return {
        getImage,
        image
      }
    },
    async mounted () {
    try {
      const response = await axios.get('http://localhost:1337/api/players?populate=*')
      this.players = response.data.data
    } catch (error) {
      this.error = error;
    }
  }
}
</script>

<style lang="scss">
.teamContainer {
  // background-color: blue;
  margin-top: 15px;
  
  @media screen and (min-width: $breakpoint-md) {
    width: 100%;
    display: flex;
    justify-content: space-around;
    // padding: 0 250px;
    align-items: center;
  }

  @media screen and (min-width: $breakpoint-lg) {
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  
  @media screen and (min-width: $breakpoint-xl) {
    width: 65%;
  }

  figure {
    display: grid;
    overflow: hidden;
    cursor: pointer;
    height: 420px;

    > * {
      grid-area: 1/1;
      transition: .4s;
    }

    figcaption {
      display: grid;
      align-items: center;
      color: #0000;

      background: var(--c,#0009);
      clip-path: inset(0 var(--_i,100%) 0 0);
      -webkit-mask:
        linear-gradient(#000 0 0),
        linear-gradient(#000 0 0);
      -webkit-mask-composite: xor;
      -webkit-mask-clip: text, padding-box;

      img {
        display: block;
        width: 100%;
        height: initial;
        padding: 10px;
      }
    }

    &:hover {
      figcaption {
        // --_i: 0%;
        --_i: -0.2%;

        img {
          transform: unset;
        }
      }

      img {
        transform: scale(1.2);
      }
      
    }
  }

  @supports not (-webkit-mask-clip: text) {
    figure figcaption {
    -webkit-mask: none;
    color: #fff;
    }
  }
}

.article-card {
  width: 100%;
  height: 420px;
  border: 1px solid #ffffff22;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  font-family: Arial, Helvetica, sans-serif;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 300ms;
  margin-bottom: 30px;

  @media screen and (min-width: $breakpoint-sm) {
    max-width: 300px;
  }

  @media screen and (min-width: $breakpoint-md) {
    margin: 0 15px;
  }

  @media screen and (min-width: $breakpoint-lg) {
    margin: 0 30px;
  }
}

.article-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}

.article-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.article-card .content {
  box-sizing: border-box;
  width: 100%;
  position: absolute;
  height: auto;
  bottom: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.6));

  span {
    font-size: 30px;
    font-weight: 700;
    text-transform: uppercase;
    text-decoration: none;
    text-shadow: 2px 2px 8px #000000;
    // box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);

    @media screen and (min-width: $breakpoint-md) {
      font-size: 24px;
    }
    @media screen and (min-width: $breakpoint-lg) {
      font-size: 30px;
    }
  }
}

.article-card .date,
.article-card .title {
  margin: 0;
}

.article-card .date {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 4px;
}

.article-card .title {
  font-size: 17px;
  color: #fff;
  position: absolute;
  bottom: 10px;
  left: 15px;
  z-index: 25;
}
</style>
