// Static Variables
export const creator = "Elpis"
export const siteName = "Elpis Sites"
export const siteDescription = "A list of all websites that belong to Elpis, especially those under the elpis.cc domain as well as other (if any) sites that he owns."

// Dynamic Variables
export const host = process.env.NEXT_PUBLIC_HOST
export const backendLocation = process.env.NEXT_PUBLIC_BACK_END
export const isProduction = process.env.NEXT_PUBLIC_IS_PRODUCTION === "true"
export const complain = `${process.env.NEXT_PUBLIC_BACK_END}/complain`
