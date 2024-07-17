import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useAnimalTypes } from "./useAnimalTypes";
import { AnimalType } from "./types";

export type SelectAnimalType = AnimalType | "";

type AnimalTypeSearchProps = {
  animalType: SelectAnimalType;
  onAnimalTypeChanged: (value: SelectAnimalType) => void;
};

export const AnimalTypeSelect = ({
  animalType,
  onAnimalTypeChanged,
}: AnimalTypeSearchProps) => {
  const animalTypes = useAnimalTypes();
  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 300 }}>
      <InputLabel id="animal-type-select-label">Animal Type</InputLabel>
      <Select
        onChange={(event) => {
          const animalType = event.target.value as SelectAnimalType;
          onAnimalTypeChanged(animalType);
        }}
        value={animalType}
        labelId="animal-type-select-label"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {animalTypes.map(({ displayName, type }) => {
          return (
            <MenuItem key={type} value={type}>
              {displayName}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};
