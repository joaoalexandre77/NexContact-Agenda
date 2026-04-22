import bcrypt from 'bcrypt';

export const hashPassword = async (senha) => {
    return await bcrypt.hash(senha, 10);
}

export const comparePassword = async (senha, hash) => {
    return await bcrypt.compare(senha, hash);
}