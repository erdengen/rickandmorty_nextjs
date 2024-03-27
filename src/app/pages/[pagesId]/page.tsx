import { Metadata } from "next";

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Sayfanın ${params.pagesId}`);
    }, 100);
  });
  return {
    title: `Pages Bilgi ID ${title}`,
    description: `Pages Bilgi ID ${title}`,
  };
};

type Props = {
  params: {
    pagesId: string;
  };
};

export default function ProductDetail({ params }: Props) {
  return <h1>Details about product {params.pagesId}</h1>;
}
