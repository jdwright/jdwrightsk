// import '$lib/supabaseClient'
import { getServerSession } from '@supabase/auth-helpers-sveltekit'
import { supabase } from '$lib/supabaseClient'
export async function handle({ event, resolve }) {
  const session = await getServerSession(event);
  const { data, error, status } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', session.user.id)
    .single();
  // event.locals.user = await getUserInformation(event.cookies.get('sessionid'));
  event.locals.user = data;

  const response = await resolve(event);
  // response.headers.set('x-custom-header', 'potato');

  return response;
}
