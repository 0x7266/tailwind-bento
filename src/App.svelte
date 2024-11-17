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

<main class="flex h-dvh flex-col items-center justify-center bg-[#f6f5f6]">
  <div
    class="grid w-full gap-4 sm:grid-cols-2 sm:grid-rows-5 md:h-[881px] md:w-[1120px] md:grid-cols-4 md:grid-rows-3"
  >
    <div
      class="order-last grid gap-4 sm:col-span-2 sm:grid-cols-2 md:order-first md:col-span-1 md:row-span-3 md:w-[256px] md:grid-cols-1"
    >
      <div
        class="md-h-[415px] flex flex-col items-center justify-center gap-6 rounded-[10px] bg-yellow-100 sm:row-span-2 md:gap-300 md:p-400"
      >
        <p
          class="font-dm-sans text-text-preset-2 font-medium leading-text-preset-2 tracking-text-preset-2"
        >
          Create and schedule content <em class="text-purple-500">quickier.</em>
        </p>
        <img src={createPost} alt="create schedule content" class="w-48" />
      </div>
      <div
        class="flex flex-col justify-between gap-9 rounded-[10px] bg-yellow-500 sm:row-span-2 md:h-[434px] md:p-300"
      >
        <p
          class="font-dm-sans text-text-preset-2 font-medium leading-text-preset-2 tracking-text-preset-2"
        >
          Write your content<br />using AI.
        </p>
        <img src={aiContent} alt="five stars" class="" />
      </div>
    </div>

    <div
      class="grid w-full grid-rows-4 gap-4 sm:grid-cols-2 sm:grid-rows-2 md:col-span-2 md:row-span-2"
    >
      <div
        class="flex flex-col items-center justify-center gap-300 rounded-[10px] bg-purple-500 p-400 sm:col-span-2 md:h-[324px] md:w-[544px]"
      >
        <p
          class="text-center font-dm-sans text-text-preset-1 font-medium leading-text-preset-1 tracking-text-preset-1 text-white"
        >
          Social Media <span class="text-yellow-500">10x</span><br /><span
            class="italic">Faster</span
          > with AI
        </p>
        <div class="flex flex-col items-center justify-center gap-1">
          <img src={fiveStars} alt="five stars" class="h-400 w-[192px]" />
          <p
            class="font-dm-sans text-text-preset-4 leading-text-preset-4 tracking-text-preset-4 text-white"
          >
            Over 4,000 5-stars reviews
          </p>
        </div>
      </div>
      <div
        class="flex flex-col justify-between overflow-clip rounded-[10px] bg-white p-300 md:h-[247px] md:w-[256px]"
      >
        <img
          src={multiplePlatforms}
          alt="multiple platforms"
          class="w-[316.08px] max-w-screen-2xl"
        />
        <p
          class="font-dm-sans text-text-preset-3 font-medium leading-text-preset-3 tracking-text-preset-3"
        >
          Manage<br />multiple accounts and platforms.
        </p>
      </div>
      <div
        class="flex flex-col justify-between gap-200 overflow-clip rounded-[10px] bg-yellow-500 p-300 md:h-[247px] md:w-[256px]"
      >
        <p
          class="font-dm-sans text-text-preset-3 font-medium leading-text-preset-3 tracking-text-preset-3"
        >
          Maintain a consistent posting schedule.
        </p>
        <img
          src={consistentSchedule}
          alt="consistent schedule"
          class="md:h-[157px] md:w-[208px]"
        />
      </div>
    </div>

    <div
      class="relative flex flex-col justify-around gap-300 overflow-clip rounded-[10px] bg-purple-100 p-400 md:col-span-1 md:row-span-2 md:h-[603px] md:w-[256px]"
    >
      <p
        class="font-dm-sans text-text-preset-3 font-medium leading-text-preset-3 tracking-text-preset-3 text-black"
      >
        Schedule to social media.
      </p>
      <img
        src={schedulePosts}
        alt="create schedule content"
        class="relative max-w-screen-2xl md:h-[318px] md:w-[357px]"
      />
      <p
        class="font-dm-sans text-text-preset-4 leading-text-preset-4 tracking-text-preset-4"
      >
        Optimize post timings to publish content at the perfect time for your
        audience.
      </p>
    </div>
    <div
      class="grid gap-4 sm:col-span-2 sm:grid-cols-3 sm:grid-rows-1 md:col-span-3"
    >
      <div
        class="rounded-[10px] bg-purple-500 sm:col-span-2 md:order-last md:row-span-1"
      >
        <img src={growFollowers} alt="" class="w-20" />
      </div>
      <div
        class="row-span-2 rounded-[10px] bg-white sm:col-span-1 sm:row-span-1"
      >
        <img src={audienceGrowth} alt="" class="w-40" />
      </div>
    </div>
  </div>
</main>
