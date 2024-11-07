<script lang="ts">
  import "./app.css";
</script>

<main
  class="h-dvh bg-[#f9f9f9] w-full p-6 flex flex-col items-center justify-center"
>
  <div
    class="w-full h-full flex flex-col md:grid md:grid-cols-4 md:grid-rows-5 lg:grid-cols-4 lg:w-3/5 lg:h-3/5 gap-4"
  >
    <div
      class="w-full h-full flex flex-col md:grid md:grid-rols-2 md:grid-cols-3 md:col-span-4 gap-4"
    >
      <div class="h-full bg-violet-500 rounded-md">1</div>
      <div
        class="w-full h-full flex flex-col md:order-3 md:grid md:grid-cols-2 gap-4"
      >
        <div class="h-full bg-white rounded-md">2</div>
        <div class="h-full bg-orange-300 rounded-md">3</div>
      </div>
      <div class="h-full bg-violet-200 rounded-md md:col-span-2 md:row-span-2">
        4
      </div>
    </div>

    <div
      class="w-full h-full flex flex-col md:col-span-4 md:grid md:grid-cols-3 lg:grid-rows-3 gap-4"
    >
      <div class="h-full md:order-last bg-violet-500 rounded-md md:col-span-2">
        5
      </div>
      <div class="h-full bg-white rounded-md md:col-span-1">6</div>
    </div>

    <div class="w-full h-full flex flex-col md:flex-row gap-4 md:col-span-4">
      <div class="bg-orange-100 h-full rounded-md w-full">7</div>
      <div class="bg-orange-300 h-full rounded-md w-full">8</div>
    </div>
  </div>
</main>
