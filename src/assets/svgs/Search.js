import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SearchIcon = (props) => (
    <Svg
        width={20}
        height={20}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M18.8331 17L15.1665 13.3333C16.0832 12 16.6663 10.4167 16.6663 8.66669C16.6663 4.33336 13.083 0.75 8.74967 0.75C4.41634 0.75 0.833008 4.33336 0.833008 8.66669C0.833008 13 4.41634 16.5834 8.74967 16.5834C10.4997 16.5834 12.0831 16 13.4164 15.0833L17.083 18.75L18.8331 17ZM3.33301 8.75001C3.33301 5.75001 5.74967 3.33334 8.74967 3.33334C11.7497 3.33334 14.1663 5.75001 14.1663 8.75001C14.1663 11.75 11.7497 14.1667 8.74967 14.1667C5.74967 14.1667 3.33301 11.75 3.33301 8.75001Z"
            fill="#5E5E5E"
        />
    </Svg>
);
export default SearchIcon;