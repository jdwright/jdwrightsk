<script lang="ts">
  import "virtual:windi.css"
  import { browser } from "$app/environment";
  if (browser) import("virtual:windi-devtools")
    import { supabase } from '$lib/supabaseClient'
    import { invalidate } from '$app/navigation'
    import { onMount } from 'svelte'
    import './styles.css'
  
    onMount(() => {
      const {
        data: { subscription },
      } = supabase.auth.onAuthStateChange(() => {
        invalidate('supabase:auth')
      })
  
      return () => {
        subscription.unsubscribe()
      }
    })
  </script>
  
  <div class="container" style="padding: 50px 0 100px 0">
    <slot />
  </div>
  