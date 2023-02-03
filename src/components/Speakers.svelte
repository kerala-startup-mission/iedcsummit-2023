<script>
  import {onMount} from 'svelte';

  let speaker_list = [];

  onMount(()=>{
    fetch(`https://events.startupmission.in/api/event/wss-2021/speakers?category=speaker`)
        .then(response => response.json())
        .then((json) => {
          speaker_list = json;
        });
  });

</script>

{#each Object.entries(speaker_list) as [category, speakers]}
  <div class="mx-auto speakers__container ">

    <div class="grid grid-cols-2 gap-10 md:grid-cols-4 sm:grid-cols-3">
      {#each speakers as {name, designation, organisation, photo, linkedin}}
        
        <div class="relative">

          <div style="transform-origin: 1.2rem 1.5rem;" class="mx-auto transition ease-in-out transform shadow speakers__item group">
            <div class="speakers__photo mb-3">
              <img src="{photo}" alt="name" class="transition duration-300 grayscale filter ">
            </div>
            <div class="px-2 pb-2 group-hover:text-red-500 ">
              <div class="text-lg font-bold  speakers__name">{name}</div>
              <div class="text-sm  speakers__designation">{designation}</div>
              <div class="text-sm  speakers__organisation">{organisation}</div>
              {#if linkedin}
                <div class="flex justify-start text-blue-500 linkedin hover:text-white mt-3">
                  <a href="{linkedin}" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-linkedin" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <rect x="4" y="4" width="16" height="16" rx="2"></rect>
                      <line x1="8" y1="11" x2="8" y2="16"></line>
                      <line x1="8" y1="8" x2="8" y2="8.01"></line>
                      <line x1="12" y1="16" x2="12" y2="11"></line>
                      <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                    </svg>
                  </a>
                </div>
              {/if}
            </div>
          </div>

        </div>
      {/each}
    </div>

  </div>
{/each}
