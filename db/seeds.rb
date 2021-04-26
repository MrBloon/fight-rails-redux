Fight.destroy_all
HeroFight.destroy_all
FightEquipment.destroy_all
Hero.destroy_all
User.destroy_all
Equipment.destroy_all

User.create(email: "imthefoe@email.com", password: 1234567)
User.create(email: "imthetheplayer@email.com", password: 1234567)

Hero.create(name: "Foe", user: User.find_by(email: "imthefoe@email.com"), foe: true)
Hero.create(name: "Player", user: User.find_by(email: "imthetheplayer@email.com"))

Equipment.create(name: "Shield (+1 HP)")
Equipment.create(name: "Sword (+1 Damage)")


