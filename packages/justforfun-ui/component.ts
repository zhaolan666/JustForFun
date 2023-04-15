import { JffButton, JffButtonGroup } from "@justforfun-ui/components/button";
import { JffInput } from "@justforfun-ui/components/input";
import { JffIcon } from "@justforfun-ui/components/icon";
import { JffBadge } from "@justforfun-ui/components/badge";
import { JffForm, JffFormItem } from "packages/components/form";
import { JffConfigProvider } from "@justforfun-ui/components/config-provider";


import type { Plugin } from 'vue'



export default [
  JffInput,
  JffIcon,
  JffButton,
  JffButtonGroup,
  JffForm,
  JffFormItem,
  JffBadge,
  JffConfigProvider
] as Plugin[]


