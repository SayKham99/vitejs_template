import sanityClient from '@sanity/client'

export default sanityClient({
	projectId: '35e0c15y',
	dataset: 'production',
	apiVersion: 'v2021-10-21',
	useCdn: true
})
