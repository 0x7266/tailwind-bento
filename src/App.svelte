<script lang="ts">
  import "./app.css";
</script>

<main
  class="h-dvh bg-[#f9f9f9] w-full p-6 flex flex-col items-center justify-center"
>
  <div
    class="w-full h-full grid grid-rows sm:grid-cols-2 sm:grid-rows-5 md:grid-rows-3 md:grid-cols-4 lg:w-3/5 lg:h-3/5 gap-4"
  >
    <div
      class="sm:col-span-2 order-last md:order-first grid gap-4 sm:grid-cols-2"
    >
      <div class="bg-orange-100 h-full rounded-md sm:row-span-2">1-1</div>
      <div class="bg-orange-300 h-full rounded-md sm:row-span-2">1-2</div>
    </div>

    <div
      class="w-full h-full grid grid-rows-4 sm:grid-cols-2 sm:grid-rows-2 md:col-span-4 gap-4"
    >
      <div class="h-full bg-violet-500 rounded-md sm:col-span-2">2-1</div>
      <div class="h-full bg-white rounded-md">2-2</div>
      <div class="h-full bg-orange-300 rounded-md row-span-2 sm:row-span-1">
        2-3
      </div>
    </div>

    <div class="h-full bg-violet-200 rounded-md md:col-span-2 md:row-span-2">
      3-1
    </div>
    <div
      class="w-full h-full grid grid-rows-3 sm:grid-cols-3 sm:grid-rows-1 sm:col-span-2 lg:grid-rows-3 gap-4"
    >
      <div class="h-full md:order-last bg-violet-500 rounded-md sm:col-span-2">
        4-1
      </div>
      <div
        class="h-full bg-white rounded-md row-span-2 sm:row-span-1 sm:col-span-1"
      >
        4-2
      </div>
    </div>
  </div>
</main>
