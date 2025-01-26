import { Order, Product } from "@/types";
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
      throw new Error("Failed to get product!");
    }
    return response.json();
  };
  const { data: product, isLoading } = useQuery(
    ["fetchMyProduct", productId],
    getMyProductRequest,
    { enabled: !!productId }
  );

  return { product, isLoading };
};

export const useCreateMyProduct = () => {
  const { getAccessTokenSilently } = useAuth0();

  const createMyProductRequest = async (
    productFormData: FormData
  ): Promise<Product> => {
    const accessToken = await getAccessTokenSilently();

    const response = await fetch(`${API_BASE_URL}/api/my/product`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: productFormData,
    });

    if (!response.ok) {
      throw new Error("Failed to create product!");
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
    toast.error("Unable to create product!");
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
    toast.success("Product updated!");
  }

  if (error) {
    toast.error("Unable to update product!");
  }

  return { updateProduct, isLoading };
};

export const useDeleteMyProduct = ({ productId }: Props) => {
  const { getAccessTokenSilently } = useAuth0();

  const deleteProductRequest = async (): Promise<void> => {
    const accessToken = await getAccessTokenSilently();

    const response = await fetch(
      `${API_BASE_URL}/api/my/product/${productId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to delete product!");
    }
  };

  const {
    mutate: deleteProduct,
    isLoading,
    isSuccess,
    error,
  } = useMutation(deleteProductRequest);

  if (isSuccess) {
    toast.success("Product deleted successfully!");
  }

  if (error) {
    toast.error("Unable to delete product!");
  }

  return { deleteProduct, isLoading };
};

export const useGetMyProductOrders = () => {
  const { getAccessTokenSilently } = useAuth0();

  const getMyProductOrdersRequest = async (): Promise<Order[]> => {
    const accessToken = await getAccessTokenSilently();

    const response = await fetch(`${API_BASE_URL}/api/my/product/order`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch orders");
    }

    return response.json();
  };

  const { data: orders, isLoading } = useQuery(
    "fetchMyProductOrders",
    getMyProductOrdersRequest
  );

  return { orders, isLoading };
};

type UpdateOrderStatusRequest = {
  orderId: string;
  status: string;
};

export const useUpdateMyProductOrder = () => {
  const { getAccessTokenSilently } = useAuth0();

  const updateMyProductOrder = async (
    updateStatusOrderRequest: UpdateOrderStatusRequest
  ) => {
    const accessToken = await getAccessTokenSilently();

    const response = await fetch(
      `${API_BASE_URL}/api/my/product/order/${updateStatusOrderRequest.orderId}/status`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: updateStatusOrderRequest.status }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to update status!");
    }

    return response.json();
  };

  const {
    mutateAsync: updateProductStatus,
    isLoading,
    isError,
    isSuccess,
    reset,
  } = useMutation(updateMyProductOrder);

  if (isSuccess) {
    toast.success("Order updated");
  }

  if (isError) {
    toast.error("Unable to update order");
    reset();
  }

  return { updateProductStatus, isLoading };
};
