"use client";

import {
  Select,
  createListCollection,
  useSelectContext,
  Image,
  IconButton,
} from "@chakra-ui/react";
import { promptLanguages } from "../../common/data/promptLanguages";

const SelectTrigger = () => {
  const select = useSelectContext();
  const items = select.selectedItems;
  return (
    <IconButton
      minW={0}
      w={8}
      h={6}
      variant="plain"
      {...select.getTriggerProps()}
    >
      <Image
        src={`https://flagcdn.com/w320/${items[0]?.code.toLowerCase()}.png`}
        alt={items[0]?.code}
        w={8}
      />
    </IconButton>
  );
};

const LanguageSelect = () => {
  return (
    <Select.Root collection={languages} size="sm" defaultValue={["UA"]} w={8}>
      <Select.HiddenSelect />
      <Select.Control>
        <SelectTrigger />
      </Select.Control>

      <Select.Content w="fit-content" gap={1}>
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
              w={8}
            />
            {language.name}
            <Select.ItemIndicator />
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
};

const languages = createListCollection({
  items: promptLanguages,
  itemToString: (item) => item.name,
  itemToValue: (item) => item.code,
});

export default LanguageSelect;
