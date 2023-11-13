import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "hd6fy3bs",
  dataset: "production",
  useCdn: false,
  apiVersion: "2021-03-25",
 token: 'skB561XIaKrjVkfrRWwtcEdoJuQcRvr1V18MLtfytmvpUhFrWnX9INzO7vHNCx76FNWb7FfGemltRa2FOoACHSUnwyU7IlzDBPl9n69D6B4YQ8yAVfXF72cXuuFDRXAE74StV8SHs7DK27ImpyJdOMgo5yBKOS6QMQtumRxON2iNfLNz9aAP'
});

export const client2 = sanityClient({
  projectId: "1jj8dmgg",
  dataset: "production",
  useCdn: false,
  apiVersion: "2021-03-25",
 token: 'skFxVCuARXjk2VsxvZLbT6VNe726q0IzXUYRJFSHZNm2JrvqRjmAjVuMv7qcX9tNy1YBoupjqogFeQOJlPsrDk14TjXvrxviwYeAsb0HeigkxQIoBwcQah908g6DA1OCW8C68TJZDUixWKNSUZVcSuQqdTkolabV58Q8y36xie0qciTgJVqF'
});
