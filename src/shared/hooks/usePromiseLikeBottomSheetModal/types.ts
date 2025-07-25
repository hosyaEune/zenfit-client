import type { ComponentProps, JSX, ReactNode } from "react";

import { BottomSheetModal } from "@/shared/ui/BottomSheetModal";

export type PromiseLikeModalResolveReasons = "buttonClick";

export type PromiseLikeModalRejectReasons =
  | "buttonClick"
  | "backdropClick"
  | "escapeKeyDown"
  | "closerClick"
  | "errorResolve"
  | undefined;

export type TResolveFun = (value?: PromiseLikeModalResolveReasons) => void;
export type TRejectFun = (value: PromiseLikeModalRejectReasons) => void;

export type PromiseLikeModalCreatorProps = {
  renderComponent: (onResolve: TResolveFun, onReject: TRejectFun) => ReactNode;
  renderFooter?: (onResolve: TResolveFun, onReject: TRejectFun) => ReactNode;
  onCloseCb?: () => void;
  modalProps?: Omit<
    ComponentProps<typeof BottomSheetModal>,
    "open" | "onClose" | "children"
  >;
};

export type PromiseLikeModalCreator = (
  props: PromiseLikeModalCreatorProps
) => Promise<PromiseLikeModalRejectReasons>;

export type UsePromiseLikeModalReturnType = [
  JSX.Element,
  PromiseLikeModalCreator,
];
