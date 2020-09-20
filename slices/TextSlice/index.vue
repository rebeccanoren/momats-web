<template>
  <section class="form">
    <div class="w-full max-w-xs">
      <form
        name="contactus"
        action="/thanks"
        method="post"
        netlify
        netlify-honeypot="bot-field"
        class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <input type="hidden" name="form-name" value="contactus" />
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
            Namn
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Namn"
            name="name"
            required
          />
        </div>

        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
            Email
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            placeholder="Email"
            name="Email"
            required
          />
        </div>

        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="message"
          >
            Meddelande
          </label>
          <textarea
            class=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
            id="message"
            name="message"
          ></textarea>
        </div>

        <div class="flex items-center justify-between">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            value="Send message"
          >
            Skicka
          </button>
        </div>
      </form>
    </div>
  </section>
</template>
<script>
export default {
  props: ["slice"]
};
</script>
<style scoped>
.form {
  margin: 0 auto;
  max-width: 500px;
}
</style>
