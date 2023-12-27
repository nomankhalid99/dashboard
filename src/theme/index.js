import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors:{
    purple:{
      500:"#5F00D9"
    },
    p:{
      purple:"#5F00D9",
      black:"#171717"
    },
    black:{
      5:"#F3F3F7",
      10:"#EEEEF7",
      20:"#D8DDE2",
      40:"#BABAC4",
      60:"#797E82",
      80:"#535D66",
    }
  },
    fonts: {
        heading: "Ubuntu",
        body: "Ubuntu",
      },
      styles: {
        global: {
          body: {
            bg: '#F3F3F7',
          },
        },
      },

      components: {
        Button: {
          baseStyle: {
            fontWeight: "bold",
            borderRadius: "10px",
          },
        },
        FormLabel: {
          baseStyle: {
            fontSize: "sm",
          },
        },
        Input: {
          variants: {
            outline: {
              field: {
                h: "38px",
                borderRadius: "8px",
                fontSize: "sm",
                pb: "0",
                _focus: {
                  boxShadow: "0 0 0 1px #5F00D9",
                },
              },
            },
          },
        },
        Textarea: {
          variants: {
            outline: {
              h: "38px",
              borderRadius: "8px",
              fontSize: "sm",
  
              _focus: {
                boxShadow: "0 0 0 1px #5F00D9",
              },
            },
          },
        },
      },
},withDefaultColorScheme({ colorScheme: 'purple' }))