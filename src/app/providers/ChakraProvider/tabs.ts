import { defineSlotRecipe } from "@chakra-ui/react";
import { tabsAnatomy } from "@chakra-ui/react/anatomy";
// TODO: сделать нормально
export const tabsSlotRecipe = defineSlotRecipe({
  className: "tabs",
  slots: tabsAnatomy.keys(), // ["root","list","trigger","content","indicator"]
  base: {
    root: {
      // переменные для индикатора/радиусов можно хранить на root
      "--tabs-trigger-radius": "radii.l2",
    },
    list: {
      display: "flex",
      gap: "2",
      borderBottomWidth: "1px",
      borderColor: "gray.200",
    },
    trigger: {
      position: "relative",
      px: "3",
      py: "2",
      rounded: "var(--tabs-trigger-radius)",
      color: "fg.muted",
      _hover: { bg: "gray.50" },
      _selected: {
        color: "fg",
      },
      _disabled: {
        opacity: 0.5,
        cursor: "not-allowed",
      },
    },
    indicator: {
      // по умолчанию — тонкая нижняя линия под активным табом
      height: "0.5",
      bg: "colorPalette.600",
      rounded: "full",
    },
    content: {
      pt: "3",
    },
  },
  variants: {
    variant: {
      // классический "underline"
      underline: {
        list: { borderBottomWidth: "1px", borderColor: "gray.200", gap: "0" },
        trigger: {
          rounded: "0",
          _selected: { color: "fg", fontWeight: "semibold" },
          _after: {
            content: '""',
            position: "absolute",
            left: "0",
            right: "0",
            bottom: "-1px",
            height: "0.5",
            bg: "transparent",
            transitionProperty: "common",
            transitionDuration: "normal",
          },
          _selectedAfter: {
            bg: "colorPalette.600",
          },
        },
        indicator: { display: "none" },
      },
      // наш кастомный "pill": триггеры — как таблетка, индикатор — скрыт
      pill: {
        list: {
          bg: "gray.200",
          // rounded: "l3",
          borderRadius: "lg",
        },
        trigger: {
          _hover: { bg: "blue" },
          _selected: {
            bg: "blue",
            color: "white",
            shadow: "xs",
            borderRadius: "lg",
          },
        },
        indicator: { display: "none" },
      },
    },
    size: {
      sm: {
        trigger: { px: "2.5", py: "1.5", textStyle: "sm" },
        content: { pt: "2" },
      },
      md: {
        trigger: { px: "3", py: "2", textStyle: "sm" },
        content: { pt: "3" },
      },
      lg: {
        trigger: { px: "4", py: "2.5", textStyle: "md" },
        content: { pt: "4" },
      },
    },
  },
  defaultVariants: {
    variant: "pill",
    size: "md",
  },
});
