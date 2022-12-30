<script>
    import { onMount } from 'svelte'
    import { supabase } from '$lib/supabaseClient'

    export let data;
    let loading = false;
    let roots = [];

    onMount(() => {
      get()
    })
  
    const get = async () => {
      try {
        loading = true
        // const { user } = data;
  
        const { data, error, status } = await supabase
          .from('pie_roots')
          .select()
        //   .eq('id', user.id)
        //   .single()
  
        if (data) {
        //   username = data.username
        //   website = data.website
        //   avatarUrl = data.avatar_url
        console.log(data)
        roots = data;
        }
  
        if (error && status !== 406) throw error
      } catch (error) {
        if (error instanceof Error) {
          alert(error.message)
        }
      } finally {
        loading = false
      }
    }
</script>

{#each roots as x}
    <div>
        <h3>{x.id} {x.root}</h3>
        <div>
            <div>{x.category}</div>
            <div>{x.gloss_english}</div>
            <div>{x.gloss_german}</div>
        </div>
        <hr>
    </div>
{/each}
