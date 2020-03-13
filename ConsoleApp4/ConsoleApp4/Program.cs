 using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;

namespace ConsoleApp4
{
    class Program
    {
        static void Main(string[] args)
        {
            DataSet1 set = new DataSet1();
            Random r = new Random();
            Random s = new Random((int)DateTime.Now.Second);

            for (int i = 1; i < 8; i++)
            {
                set.Colegio.Rows.Add(i);
            }

            for (int i = 1; i < 8; i++)
            {
                for (int j = 0; j < 20; j++)
                {
                    string name = GenerarNombre(s);
                    for (int k = 0; k < 3; k++)
                    {
                        set.Alumnos.Rows.Add(new object[] { r.Next(1, 10), r.Next(1, 10), r.Next(1, 10), r.Next(1, 10), name, i });
                    }
                }
            }

            set.WriteXml(@"D:\tests\hola.xml");

            Console.WriteLine($"{set.Alumnos.Columns[5]}\t{set.Alumnos.Columns[4]}\t\t\t{set.Alumnos.Columns[0]}\t{set.Alumnos.Columns[1]}\t{set.Alumnos.Columns[2]}\t{set.Alumnos.Columns[3]}");
            Console.WriteLine("===========================================================================================");

            foreach (DataRow i in set.Alumnos.Rows)
            {
                Console.WriteLine($"{i[5]}\t{i[4]}\t\t{i[0]}\t\t{i[1]}\t{i[2]}\t{i[3]}");
            }

            Console.ReadKey();
        }

        static string[] nombres = { "juan", "pablo", "Paco", "jose", "Alberto", };
        static string[] apellidos = { "sanchez", "perez", "lopez", "zelaya", "alvarez", };

        private static string GenerarNombre(Random r)
        {
            return (nombres[r.Next(0, 5)] + " " + apellidos[r.Next(0, 5)]);
        }
    }
}
