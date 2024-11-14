<script lang="ts">
  import "./app.css";
  import fiveStars from "./lib/assets/images/illustration-five-stars.webp";
  import aiContent from "./lib/assets/images/illustration-ai-content.webp";
  import audienceGrowth from "./lib/assets/images/illustration-audience-growth.webp";
  import consistentSchedule from "./lib/assets/images/illustration-consistent-schedule.webp";
  import createPost from "./lib/assets/images/illustration-create-post.webp";
  import growFollowers from "./lib/assets/images/illustration-grow-followers.webp";
  import multiplePlatforms from "./lib/assets/images/illustration-multiple-platforms.webp";
  import schedulePosts from "./lib/assets/images/illustration-schedule-posts.webp";
</script>

<main
  class="h-dvh bg-[#f9f9f9] w-full p-6 flex flex-col items-center justify-center"
>
  <div
    class="w-full h-full grid grid-rows sm:grid-cols-2 sm:grid-rows-5 md:grid-rows-3 md:grid-cols-4 lg:w-2/3 lg:h-4/5 gap-4"
  >
    <div
      class="grid gap-4 order-last sm:col-span-2 sm:grid-cols-2 md:order-first md:row-span-3 md:col-span-1 md:grid-cols-1"
    >
      <div class="bg-orange-100 rounded-md sm:row-span-2">
        <img src={createPost} alt="create schedule content" />
      </div>
      <div class="bg-orange-300 rounded-md sm:row-span-2">
        <img src={aiContent} alt="five stars" />
      </div>
    </div>

    <div
      class="w-full grid grid-rows-4 sm:grid-cols-2 sm:grid-rows-2 md:col-span-2 md:row-span-2 gap-4"
    >
      <div class=" bg-violet-500 rounded-md sm:col-span-2">
        <img src={fiveStars} alt="five stars" />
      </div>
      <div class=" bg-white rounded-md">
        <img src={multiplePlatforms} alt="five stars" />
      </div>
      <div class=" bg-orange-300 rounded-md row-span-2 sm:row-span-1">
        <img src={consistentSchedule} alt="five stars" />
      </div>
    </div>

    <div class="bg-violet-200 rounded-md md:col-span-1 md:row-span-2">
      <img src={schedulePosts} alt="create schedule content" />
    </div>
    <div
      class="gap-4 grid sm:grid-cols-3 sm:grid-rows-1 sm:col-span-2 md:col-span-3"
    >
      <div
        class="md:order-last bg-violet-500 rounded-md sm:col-span-2 md:row-span-1"
      >
        <img src={growFollowers} alt="" />
      </div>
      <div class="bg-white rounded-md row-span-2 sm:row-span-1 sm:col-span-1">
        <img src={audienceGrowth} alt="" />
      </div>
    </div>
  </div>
</main>
