import Fonts from 'App/Theme/Fonts'

/**
 * This file defines the base application styles.
 *
 * Use it to define generic component styles (e.g. the default text styles, default button styles...).
 */

export default {
  screen: {
    container: {
      flex: 1,
    },
  },
  identicon: {
    overflow: 'hidden',
    maxWidth: '100%',
  },
  listItem: {
    checkmark: {
      marginRight: 4
    },
    item: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    identicon: {
      marginHorizontal: 8,
    },
    text: {
      flex: 1,
      paddingTop: 16,
      paddingBottom: 16,
      paddingLeft: 8,
      paddingRight: 8,
      borderBottomWidth: 1,
      borderColor: '#eee',
    },
    name: {
      ...Fonts.style.normal,
      fontSize: Fonts.size.medium,
      textAlign: 'left',
      fontWeight: 'bold',
      flex: 1,
    },
    messageRow: {
      flexDirection: 'row',
    },
    nameRow: {
      flexDirection: 'row',
    },
    message: {
      ...Fonts.style.normal,
      color: '#777',
      fontSize: Fonts.size.small,
      textAlign: 'left',
      marginBottom: 5,
    },
    typing: {
      ...Fonts.style.normal,
      color: '#05b246',
      fontSize: Fonts.size.small,
      fontWeight: 'bold',
      textAlign: 'left',
      marginBottom: 5,
    },
  },
  button: {
    text: {
      fontSize: 20,
      color: '#ffffff',
      textAlign: 'center',
    },
    container: {
      paddingTop:10,
      paddingBottom:10,
      paddingLeft:20,
      paddingRight:20,
      backgroundColor: '#74d5f1',
      borderRadius:50,
      marginTop: 16,
      marginBottom: 16,
    }
  }
}
