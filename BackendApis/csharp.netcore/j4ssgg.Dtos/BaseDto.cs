using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace j4ssgg.Dtos
{
    public class BaseDto : IBaseDto
    {
        public Guid? Id { get; set; }
        public DateTime? Registered { get; set; }
        public BaseDto()
        {
            Id = Guid.NewGuid();
            Registered = DateTime.UtcNow;
        }

    }
}
