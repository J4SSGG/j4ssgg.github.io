using j4ssgg.DataLayer;
using j4ssgg.Dtos;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<UserDbContext>(opt => opt.UseInMemoryDatabase("UsersDb"));

var app = builder.Build();

app.MapGet("/users", async (UserDbContext db) =>
    await db.Users.ToListAsync());


app.MapPost("/user", async (UserDto user, UserDbContext db) =>
{
    user.Registered = DateTime.UtcNow;
    db.Users.Add(user);
    await db.SaveChangesAsync();

    return Results.Created($"/user/{user.Name} { user.LastName }", user);
});

app.Run();