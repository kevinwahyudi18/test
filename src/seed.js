const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const seedAdminData = async () => {
  try {
    // Lakukan penambahan data di sini
    const adminData = [
      {
        username: 'kevin',
        email: 'kevin@gmail.com',
        password: 'password1',
      },
      {
        username: 'hendika',
        email: 'hendika@gmail.com',
        password: 'password2',
      },
      // ... tambahkan data lainnya sesuai kebutuhan
    ];

    // Tambahkan data ke tabel Admin
    await prisma.admin.createMany({
      data: adminData,
    });

    console.log('Admin data seeded successfully!');
  } catch (error) {
    console.error('Error seeding admin data:', error);
  } finally {
    await prisma.$disconnect();
  }
};

seedAdminData();