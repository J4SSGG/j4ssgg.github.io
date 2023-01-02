using Microsoft.EntityFrameworkCore;
using j4ssgg.Dtos;
using Microsoft.EntityFrameworkCore.ChangeTracking;

namespace j4ssgg.DataLayer
{
    public class UserDbContext : DbContext
    {
        public UserDbContext(DbContextOptions<UserDbContext> options): base(options)
        {
        }

        public DbSet<UserDto> Users => Set<UserDto>();

    }
}
