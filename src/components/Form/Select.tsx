import {
  HStack,
  Select,
  createListCollection,
  useSelectContext,
  Image,
} from "@chakra-ui/react";

type CustomSelectProps = {
  options: { code: string; name: string }[];
  value: string;
  onChange: (value: string) => void;
};

const SelectValue = () => {
  const select = useSelectContext();
  const items = select.selectedItems as Array<{ name: string; code: string }>;
  const { name, code } = items[0];
  return (
    <Select.ValueText placeholder="Select member">
      <HStack>
        <Image
          src={`https://flagcdn.com/w320/${code.toLowerCase()}.png`}
          alt={name}
          w={8}
        />

        {name}
      </HStack>
    </Select.ValueText>
  );
};

const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  value,
  onChange,
}) => {
  const members = createListCollection({
    items: options,
    itemToString: (item) => item.name,
    itemToValue: (item) => item.name,
  });

  return (
    <Select.Root
      collection={members}
      size="lg"
      defaultValue={[value]}
      positioning={{ sameWidth: true }}
      onChange={(e) => {
        onChange((e.target as HTMLSelectElement).value);
      }}
    >
      <Select.HiddenSelect />
      <Select.Label textAlign="left">Select language</Select.Label>
      <Select.Control>
        <Select.Trigger
          borderColor="whiteAlpha.300"
          borderRadius="14px"
          h="64px"
          bg="whiteAlpha.100"
          fontSize="18px"
        >
          <SelectValue />
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>
      <Select.Positioner>
        <Select.Content>
          {members.items.map((item) => (
            <Select.Item
              item={item}
              key={item.code}
              justifyContent="flex-start"
              color="gray.800"
            >
              <Image
                src={`https://flagcdn.com/w320/${item.code.toLowerCase()}.png`}
                alt={item.name}
                w={8}
              />
              {item.name}
              <Select.ItemIndicator />
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Positioner>
    </Select.Root>
  );
};

export default CustomSelect;
