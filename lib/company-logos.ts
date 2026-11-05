export const companyLogos = [
  ...Array.from({ length: 21 }, (_, index) => 100 + index),
  ...Array.from({ length: 19 }, (_, index) => 122 + index),
].map((number) => ({
  name: `Company ${number}`,
  src: `/images/company/company-logo-${number}.webp`,
}))
