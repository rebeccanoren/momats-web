<template>
  <div>
    <div
      @mouseover="toggleDropdown(true)"
      @mouseleave="toggleDropdown(false)"
      class="navbar-item"
    >
      <a class="dropdown mr-3 py-1 px-3 flex iteams-center"
        >Tjänster
        <div class="svg">
          <svg
            width="20"
            height="20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            :style="{
              transform: showDropdown ? 'rotate(180deg)' : 'rotate(0deg)'
            }"
          >
            <path
              d="M5.314 8.714c0 .107.053.228.134.308l6.24 6.241c.081.08.201.134.309.134a.462.462 0 00.308-.134l6.24-6.24c.081-.081.135-.202.135-.309a.462.462 0 00-.134-.308l-.67-.67a.461.461 0 00-.308-.133.462.462 0 00-.308.134L11.997 13 6.733 7.737a.461.461 0 00-.308-.134.436.436 0 00-.308.134l-.67.67c-.08.08-.133.2-.133.307z"
              fill="#000"
            />
          </svg></div
      ></a>

      <div
        @mouseover="toggleDropdown(true)"
        @mouseleave="toggleDropdown(false)"
        class="navbar-dropdown"
        :style="{ display: showDropdown ? 'block' : 'none' }"
      >
        <nuxt-link class="py-3 px-5" to="/formthotics">Formthotics</nuxt-link>
        <nuxt-link class="py-3 px-5" to="/lopcoachning">Löpträning</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      routeChange: false,
      showDropdown: false
    };
  },

  watch: {
    $route() {
      this.routeChange = true;
      this.showDropdown = false;
    }
  },

  methods: {
    toggleDropdown(payload) {
      if (this.showDropdown !== payload) this.routeChange = false;
      if (!this.routeChange) {
        this.showDropdown = payload;
      }
    }
  }
};
</script>

<style lang="sass" scoped>
.navbar-dropdown
  display: flex;
  flex-direction: column;
  background-color: #FFFFFF;
  position: absolute;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.1);
  z-index: 1;
  border-radius: 4px;

a
  color: black;
  display: block;

.dropdown
    display: flex;
    flex-direction: row;
    align-items: center;

    .svg
      margin-left: 4px;
      width: 100%;
</style>
