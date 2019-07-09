package com.example.leon.wallet;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;

import org.bitcoinj.crypto.ChildNumber;
import org.bitcoinj.crypto.DeterministicHierarchy;
import org.bitcoinj.crypto.DeterministicKey;
import org.bitcoinj.crypto.HDKeyDerivation;
import org.bitcoinj.crypto.MnemonicCode;
import org.bitcoinj.crypto.MnemonicException;
import org.bitcoinj.wallet.DeterministicKeyChain;
import org.bitcoinj.wallet.DeterministicSeed;

import java.math.BigInteger;
import java.security.SecureRandom;
import java.util.List;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        //1. 128bit的entropy
        //随机生成
        SecureRandom secureRandom = new SecureRandom();
        //128bit = 128 /8  字节, 创建字节对象
        byte[] entroy = new byte[DeterministicSeed.DEFAULT_SEED_ENTROPY_BITS / 8];
        secureRandom.nextBytes(entroy);
        //2. entropy生成助记词
        try {
            List<String> list = MnemonicCode.INSTANCE.toMnemonic(entroy);

            //1. 拿到助记词，生成seed
            byte[] seeds = MnemonicCode.INSTANCE.toEntropy(list);

            //2. seed 计算出master 私钥和公钥
            DeterministicKey root = HDKeyDerivation.createMasterPrivateKey(seeds);
            //3. master 公私钥来派出子公私钥
            DeterministicHierarchy deterministicHierarchy = new DeterministicHierarchy(root);

            // m / 44' / 0' / 0'
//            public static final ImmutableList<ChildNumber> BIP44_ACCOUNT_ZERO_PATH =
//                    ImmutableList.of(new ChildNumber(44, true), ChildNumber.ZERO_HARDENED, ChildNumber.ZERO_HARDENED);
//            ChildNumber.ZERO_HARDENED      public static final ChildNumber ZERO_HARDENED = new ChildNumber(0, true);
            //HARDENED 密钥加固， 如果不加固，会出现安全性的问题，如果给你一个公钥，派生出这个公钥下面所有子公钥，如果加固的话，只拿到公钥是派生不出子的公钥
            //加固的标记在路径里面的表示就是 '
            /// m / 44' / 0' / 0'  /0
            //
//            DeterministicKey deterministicKey = deterministicHierarchy.deriveChild(DeterministicKeyChain.BIP44_ACCOUNT_ZERO_PATH, new ChildNumber(0, false));
            DeterministicKey deterministicKey = deterministicHierarchy.deriveChild(DeterministicKeyChain.BIP44_ACCOUNT_ZERO_PATH,true, true, new ChildNumber(0, false));

            //            BigInteger privKey = deterministicKey.getPrivKey();
//            byte[] privKeyBytes33 = deterministicKey.getPrivKeyBytes33();
//            for (int i = 0; i < list.size(); i++) {
//                Log.d("MainActivity", list.get(i));
//
//            }
        } catch (MnemonicException.MnemonicLengthException e) {
            e.printStackTrace();
        } catch (MnemonicException.MnemonicChecksumException e) {
            e.printStackTrace();
        } catch (MnemonicException.MnemonicWordException e) {
            e.printStackTrace();
        }


    }
}
