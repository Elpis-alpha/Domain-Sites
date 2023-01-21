// Static Variables
export const creator = "Elpis"
export const siteName = "Domain Sites"
export const siteDescription = "A list of all websites under the elpis.cc domain"

// Dynamic Variables
export const host = process.env.NEXT_PUBLIC_HOST
export const backendLocation = process.env.NEXT_PUBLIC_BACK_END
export const isProduction = process.env.NEXT_PUBLIC_IS_PRODUCTION === "true"
export const complain = `${process.env.NEXT_PUBLIC_BACK_END}/complain`
