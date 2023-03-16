import {
  AlbumFieldStart,
  AlbumFieldEnd,
  Naming,
  Icon,
  LocName,
  NameField,
} from "./AlbumStyle";

const Album = () => (
  <>
    <AlbumFieldStart>
      <Icon />
      <NameField>
        <Naming>Album name</Naming>
        <LocName>Album location</LocName>
      </NameField>
    </AlbumFieldStart>
    <AlbumFieldEnd>
      <Icon />
      <NameField>
        <Naming>Album name 2</Naming>
        <LocName>Album location 2</LocName>
      </NameField>
    </AlbumFieldEnd>
  </>
);

export default Album;
