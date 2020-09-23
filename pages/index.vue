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
            Har du ont i knän, ryggen, höfter eller överpronerar med fötterna?
            En enkel och effektiv lösning kan då vara ortopediska inlägg från
            Formthotics. Med inlägg i skorna formade efter hur du och din kropp
            rör dig kan du få ett bättre stöd för dina fötter till ett bra pris.
            Kontakta oss och boka en tid så kan du åka hem samma dag med dina
            nya inlägg.
          </p>

          <nuxt-link class="inline-block mt-5 mb-5 flex" to="/lopcoachning"
            >Mer om Formthotics
            <svg>
              <path
                d="M12.803 8.93l-4.314 3.892a.727.727 0 01-.954 0 .567.567 0
              010-.86L10.7 9.108H.674C.302 9.108 0 8.836 0
              8.5c0-.336.302-.608.674-.608h10.025L7.536 5.038a.567.567 0
              010-.86A.711.711 0 018.012 4c.173 0 .345.06.477.178l4.314
              3.892a.567.567 0 010 .86z"
                fill="#06B957"
              />
            </svg>
          </nuxt-link>
        </div>
        <div class="card">
          <img src="../assets/images/running.jpg" alt="" />
          <h2>Löpcoach</h2>
          <p>
            Vi erbjuder individuell löpcoaching, löpträning i grupp och för
            företag. Vi fokuserar på en skonsam och effektiv löpteknik och kan
            hjälpa dig med löpstegsteknik, skräddarsydda träningsscheman. Men
            även hur du hittar tillbaka till glädjen i löpningen. Vi skräddarsyr
            ditt träningsupplägg efter dina behov.
          </p>
          <nuxt-link class="inline-block mt-5 mb-5 flex" to="/lopcoachning"
            >Mer om löpcoachning
            <svg>
              <path
                d="M12.803 8.93l-4.314 3.892a.727.727 0 01-.954 0 .567.567 0
              010-.86L10.7 9.108H.674C.302 9.108 0 8.836 0
              8.5c0-.336.302-.608.674-.608h10.025L7.536 5.038a.567.567 0
              010-.86A.711.711 0 018.012 4c.173 0 .345.06.477.178l4.314
              3.892a.567.567 0 010 .86z"
                fill="#06B957"
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
