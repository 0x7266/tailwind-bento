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
  class="flex max-h-dvh w-full flex-col items-center justify-center overflow-hidden bg-[#f6f5f6] p-6"
>
  <div
    class="grid-rows grid h-full w-full gap-4 sm:grid-cols-2 sm:grid-rows-5 md:h-[881px] md:w-[1120px] md:grid-cols-4 md:grid-rows-3"
  >
    <div
      class="order-last grid gap-4 sm:col-span-2 sm:grid-cols-2 md:order-first md:col-span-1 md:row-span-3 md:w-[256px] md:grid-cols-1"
    >
      <div
        class="md-h-[415px] flex flex-col items-center justify-center gap-6 rounded-md bg-yellow-100 sm:row-span-2 md:gap-300 md:p-400"
      >
        <p
          class="font-dm-sans-medium text-text-preset-2 leading-text-preset-2 tracking-text-preset-2"
        >
          Create and schedule content <em class="text-purple-500">quickier.</em>
        </p>
        <img src={createPost} alt="create schedule content" class="w-48" />
      </div>
      <div
        class="flex flex-col justify-center gap-9 rounded-md bg-yellow-500 sm:row-span-2 md:h-[434px] md:p-300"
      >
        <p
          class="font-dm-sans-medium text-text-preset-2 leading-text-preset-2 tracking-text-preset-2"
        >
          Write your content using AI.
        </p>
        <img src={aiContent} alt="five stars" class="w-52" />
      </div>
    </div>

    <div
      class="grid w-full grid-rows-4 gap-4 sm:grid-cols-2 sm:grid-rows-2 md:col-span-2 md:row-span-2"
    >
      <div
        class="flex flex-col items-center justify-center gap-4 rounded-md bg-purple-500 p-6 sm:col-span-2"
      >
        <p class="text-center text-6xl font-medium tracking-tight text-white">
          Social Media <span class="text-yellow-500">10x</span><br /><em
            >Faster</em
          > with AI
        </p>
        <div class="flex flex-col items-center justify-center gap-1">
          <img src={fiveStars} alt="five stars" class="w-1/2" />
          <p class="text-white">Over 4,000 5-stars reviews</p>
        </div>
      </div>
      <div
        class="relative flex flex-col gap-4 overflow-clip rounded-md bg-white p-6"
      >
        <img
          src={multiplePlatforms}
          alt="five stars"
          class="relative -right-20"
        />
        <p class="text-3xl">Manage multiple accounts and platforms.</p>
      </div>
      <div class=" row-span-2 rounded-md bg-yellow-100 sm:row-span-1">
        <img src={consistentSchedule} alt="five stars" />
      </div>
    </div>

    <div class="rounded-md bg-purple-100 md:col-span-1 md:row-span-2">
      <img src={schedulePosts} alt="create schedule content" />
    </div>
    <div
      class="grid gap-4 sm:col-span-2 sm:grid-cols-3 sm:grid-rows-1 md:col-span-3"
    >
      <div
        class="rounded-md bg-purple-500 sm:col-span-2 md:order-last md:row-span-1"
      >
        <img src={growFollowers} alt="" />
      </div>
      <div class="row-span-2 rounded-md bg-white sm:col-span-1 sm:row-span-1">
        <img src={audienceGrowth} alt="" class="w-40" />
      </div>
    </div>
  </div>
</main>
