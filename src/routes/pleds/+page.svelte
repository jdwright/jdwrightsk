<script>
    import { onMount } from 'svelte'
    import { supabase } from '$lib/supabaseClient'
    import Table from '$lib/table.svelte'

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
    let columns = [
        [ 'ID',   'id', 'col-1' ], //, 'f', (x, y) => goto(x, y) ],
        [ 'Root',      'root',    'col-1' ],
        [ 'Category',    'category',  'col-1' ], //, 'html' ],
        [ 'English Gloss',    'gloss_english',   'col-1' ],
        [ 'German Gloss', 'gloss_german',    'col-1' ]
    ]
</script>

<Table {columns} rows={roots} use_filter={true} key_column=id height="80" />

