import { Product } from "@/types";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation, useQuery } from "react-query";
import { toast } from "sonner";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

type Props = {
  productId: string;
};

export const useGetMyProduct = ({ productId }: Props) => {
  const { getAccessTokenSilently } = useAuth0();

  const getMyProductRequest = async (): Promise<Product> => {
    const accessToken = await getAccessTokenSilently();

    const response = await fetch(
      `${API_BASE_URL}/api/my/product/${productId}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    if (!response.ok) {
      throw new Error("Failed to get restaurant!");
    }
    return response.json();
  };
  const { data: product, isLoading } = useQuery(
    ["fetchMyProduct", productId],
    getMyProductRequest
  );

  return { product, isLoading };
};

export const useCreateMyProduct = () => {
  const { getAccessTokenSilently } = useAuth0();

  const createMyProductRequest = async (
    productFormData: FormData
  ): Promise<Product[]> => {
    const accessToken = await getAccessTokenSilently();

    const response = await fetch(`${API_BASE_URL}/api/my/product`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: productFormData,
    });

    if (!response.ok) {
      throw new Error("Failed to create restaurant!");
    }

    return response.json();
  };

  const {
    mutate: createProduct,
    isLoading,
    isSuccess,
    error,
  } = useMutation(createMyProductRequest);

  if (isSuccess) {
    toast.success("Product created!");
  }

  if (error) {
    toast.error("Unable to update Product!");
  }

  return { createProduct, isLoading };
};

export const useUpdateMyProduct = ({ productId }: Props) => {
  const { getAccessTokenSilently } = useAuth0();

  const updateProductRequest = async (
    productFormData: FormData
  ): Promise<Product> => {
    const accessToken = await getAccessTokenSilently();

    const response = await fetch(
      `${API_BASE_URL}/api/my/product/${productId}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        body: productFormData,
      }
    );

    if (!response) {
      throw new Error("Failed to update product!");
    }

    return response.json();
  };

  const {
    mutate: updateProduct,
    isLoading,
    error,
    isSuccess,
  } = useMutation(updateProductRequest);

  if (isSuccess) {
    toast.success("Restaurant Updated");
  }

  if (error) {
    toast.error("Unable to update restaurant");
  }

  return { updateProduct, isLoading };
};
