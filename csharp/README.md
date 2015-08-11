# How this Test Works

You have 30 minutes to accomplish as many of the tasks below as possible. After 30 minutes, you must stop, the time cannot be extended. Someone will check in with you after 15 minutes to answer any questions you may have. Focus on results and don't try to impress us with software patterns or fancy code tricks.

## The Situation

A client has given Archon a file containing property data. We need to get this data into our system so we can begin collecting delinquent taxes for the client. The file is from a 1988 vintage IBM AS/400, which means it's a fixed column width text file, with fields padded with trailing spaces, consisting of the following columns:

```
AccountNumber	9 characters
Address1		100 characters
Address2		100 characters
```

Each line in the file represents a delinquent property, with an account number and two address lines. Typically `address1` contains a street address such as _935 Gravier St_ and `address2` contains an apartment or suite number, if applicable, such as _Ste 1700_.

### Tasks

1.	Parse the data. Parse each line into a new instance of the `Property` object. Put each instance you create into a list of properties (`List<Property>`) or an array (`Property[]`).

	**How many properties are in the file?**

2.	The implementation of `Property.IsApartment` is not complete. Right now it always returns `true`, but it should only return true if `Address2` contains text, which indicates an apartment or suite number is present. Modify `IsApartment` so that it returns `true` when there is a non-empty `string` in `Address2`, otherwise return `false`.

	**How many properties are apartments?**

3.	Implement `Property.District`. The first character of the account number is the district that the property is located in. Replace the implementation of `Property.District` with a new one that returns the first character of the account number.

	**How many properties are in the third district?**

4.	Implement `Property.IsOnStreet()`. Delete the `NotImplementedException` that is thrown and provide an implementation for this method that returns `true` if the street name is found in `Address1`. The method should do a case insensitive comparison. For example, if the `Property.Address1` is _935 GRAVIER ST_ then `Property.IsOnStreet("Gravier")` should return true. The method should also trim leading and trailing spaces from the `streetName` parameter. The method should throw an exception if `streetName` is null or empty.

	**How many properties are on Tchoupitoulas Street?**
