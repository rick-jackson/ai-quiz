"use client";

import {
  Select,
  createListCollection,
  useSelectContext,
  Image,
  IconButton,
  Portal,
} from "@chakra-ui/react";
import { promptLanguages } from "../../common/configs/languages";

const SelectTrigger = () => {
  const select = useSelectContext();
  const items = select.selectedItems;
  return (
    <IconButton
      variant="plain"
      h={6}
      minW={8}
      border={0}
      {...select.getTriggerProps()}
    >
      <Image
        src={`https://flagcdn.com/w320/${items[0]?.code.toLowerCase()}.png`}
        alt={items[0]?.code}
        borderRadius={3}
        w={8}
      />
    </IconButton>
  );
};

const LanguageSelect = () => {
  return (
    <Select.Root
      collection={languages}
      size="sm"
      defaultValue={["UA"]}
      w={150}
      positioning={{ placement: "left", flip: false }}
    >
      <Select.HiddenSelect />
      <Select.Control display="flex" justifyContent="flex-end">
        <SelectTrigger />
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content w={150} gap={1}>
            {languages.items.map((language) => (
              <Select.Item
                item={language}
                key={language.code}
                color="#000"
                justifyContent="flex-start"
              >
                <Image
                  src={`https://flagcdn.com/w320/${language.code.toLowerCase()}.png`}
                  alt={language.code}
                  borderRadius={3}
                  w={8}
                />
                {language.name}
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  );
};

const languages = createListCollection({
  items: promptLanguages,
  itemToString: (item) => item.name,
  itemToValue: (item) => item.code,
});

export default LanguageSelect;
