<template>
    <footer>
        <div>
            <img class="logo" :src="myLogoSrc" alt="my-logo"  width="50" />
        </div>
        <div>
            <p class="text-center text-uppercase">Suivez-vous sur les réseaux sociaux</p>
            <ul class="footer__social">
              <li>
                <a :href="twitterURL" target="_blank" title="" aria-label="Twitter" class="icon-twitter"></a>
              </li>
              <li>
                <a :href="discordURL" target="_blank" title="" aria-label="Discord" class="icon-discord"></a>
              </li>
              <li>
                <a :href="youtubeURL" target="_blank" title="" aria-label="Youtube" class="icon-youtube"></a>
              </li>
            </ul>
        </div>
    </footer>
</template>

<script>
// import { ref } from 'vue'
import myLogoSrc from "@/assets/yuzu_logo.png";

export default {
  name: 'FooterComponent',
  data() {
    return {
      youtubeURL: process.env.VUE_APP_YOUTUBE,
      discordURL: process.env.VUE_APP_DISCORD,
      twitterURL: process.env.VUE_APP_TWITTER
    }
  },
  setup() {
    return {
        myLogoSrc
    }
  }
}
</script>

<style lang="scss">
footer {
    padding: 15px;
    position: relative;

    font-family: 'Montserrat', sans-serif;

  .footer__social {
    margin-top: 15px;
    display: flex;
    justify-content: space-around;

    a {
      text-decoration: none;
    }
    &>li {
      // margin-bottom: 32px;
      // margin-left: 48px;
      font-size: 34px;
      line-height: 1;
      vertical-align: middle;
    }
  }

    .logo {
      @media screen and (min-width: $breakpoint-lg) {
        margin-left: 30px;
      }
    }

    [class^="icon-"],
    [class*=" icon-"] {
        // background-color: aqua;
        // font-size: 24px;
        &:hover::before {
          color: $sub-color;
        }
        &::before {
          color: #fff;

        }
    }

    @media screen and (min-width: $breakpoint-lg) {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
}


</style>
