// import { createClient } from '@supabase/supabase-js'

// const client = createClient(
//   import.meta.env.VITE_SUPABASE_URL,
//   import.meta.env.VITE_SUPABASE_ANON_KEY
// )

// export const updateSearchCount = async (searchTerm, movie) => {
//   if (!searchTerm?.trim() || !movie?.id) return

//   try {
//     // Check if search exists
//     const { data: existing, error: selectError } = await client
//       .from('metrics')
//       .select('*')
//       .eq('searchTerm', searchTerm)
//       .maybeSingle()

//     if (selectError) throw selectError

//     if (existing) {
//       // Convert to number and ensure within smallint range
//       const newCount = Math.min(existing.count + 1, 32767)
      
//       const { error: updateError } = await client
//         .from('metrics')
//         .update({ count: newCount })
//         .eq('searchTerm', searchTerm)

//       if (updateError) throw updateError
//     } else {
//       const { error: insertError } = await client
//         .from('metrics')
//         .insert({
//           searchTerm: searchTerm.trim(),
//           count: 1,
//           movie_id: movie.id > 32767 ? null : movie.id, // Handle large movie IDs
//           poster_url: movie.poster_path ? 
//             `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 
//             null
//         })

//       if (insertError) throw insertError
//     }
//   } catch (error) {
//     console.error('Error updating search count:', error.message)
//   }
// }

// export const getTrendingMovies = async () => {
//   try {
//     const { data, error } = await client
//       .from('metrics')
//       .select('*')
//       .order('count', { ascending: false })
//       .limit(5)

//     if (error) throw error
//     return data || []
//   } catch (error) {
//     console.error('Error getting trending movies:', error.message)
//     return []
//   }
// }

// export default client