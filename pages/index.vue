<template>
  <div>
    <slice-zone type="page" uid="homepage" :lang="$route.params.lang" />
    <section class="ps">
      <div class="ps__head">
        <header class="ps__header">
          <div class="ps__title "><h1>Våra tjänster</h1></div>
        </header>
      </div>

      <div class="md:flex justify-center">
        <div class="card">
          <img src="../assets/images/formthotics.jpg" alt="" />
          <h2>Ortopediska inlägg</h2>
          <p>
            Har du ont i knän, ryggen, höfter eller fötterna? En effektiv
            lösning är Formthotics ortopediska inlägg från. Vi formgjuter inlägg
            som passar dina fötter och din kropp. Du får ett bra stöd till ett
            bra pris.
          </p>

          <nuxt-link class="inline-block mt-5 mb-5 flex" to="/formthotics"
            >Mer om Formthotics
            <svg>
              <path
                d="M12.803 8.93l-4.314 3.892a.727.727 0 01-.954 0 .567.567 0
              010-.86L10.7 9.108H.674C.302 9.108 0 8.836 0
              8.5c0-.336.302-.608.674-.608h10.025L7.536 5.038a.567.567 0
              010-.86A.711.711 0 018.012 4c.173 0 .345.06.477.178l4.314
              3.892a.567.567 0 010 .86z"
              />
            </svg>
          </nuxt-link>
        </div>
        <div class="card">
          <img src="../assets/images/running.jpg" alt="" />
          <h2>Löpträning</h2>
          <p>
            Vi erbjuder individuell löpträning, i grupp och för
            företag. Vi erbjuder löpcoachning, lär ut effektiv löpstegsteknik
            och hjälper dig att hitta glädje i din träning.
          </p>
          <nuxt-link class="inline-block mt-5 mb-5 flex" to="/lopcoachning"
            >Mer om löpträning
            <svg>
              <path
                d="M12.803 8.93l-4.314 3.892a.727.727 0 01-.954 0 .567.567 0
              010-.86L10.7 9.108H.674C.302 9.108 0 8.836 0
              8.5c0-.336.302-.608.674-.608h10.025L7.536 5.038a.567.567 0
              010-.86A.711.711 0 018.012 4c.173 0 .345.06.477.178l4.314
              3.892a.567.567 0 010 .86z"
              />
            </svg>
          </nuxt-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import SliceZone from "vue-slicezone";

export default {
  components: {
    SliceZone
  }
};
</script>
