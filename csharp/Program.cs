using System;
using System.IO;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Archon.Interview.ListTest
{
	class Program
	{
		static void Main(string[] args)
		{
			string file = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "ClientData.txt");

			using (StreamReader reader = new StreamReader(File.OpenRead(file)))
			{
				// TODO: Read file using one of:
				// reader.ReadLine();
				// reader.ReadToEnd();
				// reader.Read(...
			}

			Console.WriteLine("Done.");
			Console.ReadKey();
		}
	}
}
